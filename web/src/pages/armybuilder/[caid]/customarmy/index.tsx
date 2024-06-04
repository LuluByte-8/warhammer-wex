import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import nookies from "nookies";

import { CustomArmyUnitDisplay } from "@/components/customarmyunitdisplay";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { firebaseAdmin } from "@/lib/firebaseAdmin";
import prisma from "@/lib/prisma";

import hero from "../../../../assets/CustomArmyHero.jpeg";

import styles from "./customarmy.module.css";

const CustomArmy: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ customarmy, squads, units, regimentMembers, owner }) => {
  type RegimentMembers = (typeof regimentMembers)[0];

  const groupedRegimentMembers = regimentMembers.reduce(
    (agg, rm) => {
      if (!agg[rm.regiment_id]) {
        agg[rm.regiment_id] = [] as Array<RegimentMembers>;
      }

      agg[rm.regiment_id].push(rm);
      return agg;
    },
    {} as Record<number, Array<RegimentMembers>>
  );

  return (
    <main className={`${styles.main}`}>
      <NavBar />

      <div className={styles.heroImageWrapper}>
        <Image className={styles.heroImage} src={hero} alt="hero-image" />
      </div>

      <div className={`${styles.armyTitle}`}>
        <div className={`${styles.armyTitleH}`}>
          <h1>{customarmy.customarmy_name}</h1>
          <h2>Created By: {customarmy.username}</h2>
        </div>
        <div className={`${styles.armyTitleP}`}>
          <p>{customarmy.description}</p>
        </div>
      </div>

      <div className={`${styles.units}`}>
        {squads.length === 0 ? (
          <div className={`${styles.noUnits}`}>
            <h2>No Units!</h2>
            <p>
              Visit the categories page <a href="../../../categories">here</a>{" "}
              to find some units to add to your army!
            </p>
          </div>
        ) : (
          <div className={`${styles.units}`}>
            {Object.entries(groupedRegimentMembers).map(
              ([regiment_id, members]) => {
                if (members.length === 0) return null;

                return (
                  <CustomArmyUnitDisplay
                    key={regiment_id}
                    squads={
                      squads.find((s) => s.squad_id === members[0].squad_id)!
                    }
                    units={units}
                    customarmy={customarmy}
                    regiment_id={+regiment_id}
                    regimentmembers={members}
                    owner={owner}
                  />
                );
              }
            )}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default CustomArmy;

export type Squads = Awaited<ReturnType<typeof prisma.squads.findFirstOrThrow>>;

export type Units = Awaited<ReturnType<typeof prisma.units.findFirstOrThrow>>;

export type CustomArmy = Awaited<
  ReturnType<typeof prisma.customarmy.findFirstOrThrow>
>;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const caid = ctx.query.caid;

  if (typeof caid !== "string") {
    return {
      notFound: true,
    };
  }

  const customarmy = await prisma.customarmy.findUnique({
    where: { customarmy_id: +caid },
  });

  if (!customarmy) {
    return {
      notFound: true,
    };
  }

  // const squadsinarmy = await prisma.squadsincustomarmy.findMany({
  //   where: { customarmyid: +caid },
  // });

  // const myArrayOfSquads = [];
  // for (let i = 0; i < squadsinarmy.length; i++) {
  //   const unitsinsquad = await prisma.squads.findMany({
  //     where: { squad_id: squadsinarmy[i].squad_id },
  //     include: { units: {} },
  //   });

  //   myArrayOfSquads.push(...unitsinsquad);
  // }

  // const squadsinarmy = await prisma.squadsincustomarmy.findMany({
  //   where: { customarmy_id: +caid },
  //   include: {
  //     squads: {
  //       include: {
  //         units: {},
  //       },
  //     },
  //   },
  // });

  const regiments = await prisma.regiments.findMany({
    where: { customarmy_id: +caid },
    include: {
      regimentmember: {
        include: {
          squads: {},
          units: {},
        },
      },
    },
  });

  const regimentMembers = await prisma.regimentmember.findMany({
    where: {
      regiments: {
        customarmy_id: +caid,
      },
    },
  });

  const squadIds = Array.from(
    new Set(regimentMembers.map((rm) => rm.squad_id))
  );
  const unitIds = Array.from(new Set(regimentMembers.map((rm) => rm.unit_id)));

  const squads = await prisma.squads.findMany({
    where: {
      squad_id: {
        in: squadIds,
      },
    },
  });

  const units = await prisma.units.findMany({
    where: {
      unit_id: {
        in: unitIds,
      },
    },
  });

  // console.log(regimentMembers);

  try {
    const cookies = nookies.get(ctx);
    const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

    const ownerCheck = await prisma.customarmy.findFirstOrThrow({
      where: { firebaseuser_id: token.uid, customarmy_id: +caid },
    });

    return {
      props: { customarmy, squads, units, regimentMembers, owner: true },
    };
  } catch (error) {
    return {
      props: { customarmy, squads, units, regimentMembers, owner: false },
    };
  }
};
