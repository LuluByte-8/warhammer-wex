import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";

import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { UnitDisplay } from "@/components/unitdisplay";
import prisma from "@/lib/prisma";

import hero from "../../../../assets/CustomArmyHero.jpeg";

import styles from "./customarmy.module.css";

const CustomArmy: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (customarmy) => {
  console.log(customarmy);
  return (
    <main className={`${styles.main}`}>
      <NavBar />

      <div className={styles.heroImageWrapper}>
        <Image className={styles.heroImage} src={hero} alt="hero" />
      </div>

      <div className={`${styles.armyTitle}`}>
        <div className={`${styles.armyTitleH}`}>
          <h1>{customarmy.customarmyname}</h1>
          <h2>Created By: {customarmy.username}</h2>
        </div>
        <div className={`${styles.armyTitleP}`}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            porttitor eros. Vestibulum varius elementum magna, et sollicitudin
            lacus mollis et. Curabitur et ullamcorper metus, feugiat suscipit
            nisi. Suspendisse tempor malesuada consectetur. Nullam ac nisl in
            elit semper tristique. Praesent blandit nibh ante, efficitur
            scelerisque tortor pretium vel. Quisque faucibus justo at nisl
            posuere bibendum. Phasellus porta ipsum nunc, nec placerat odio
            lacinia id. Maecenas placerat ipsum nibh, ac cursus tortor cursus
            non. Phasellus porttitor volutpat venenatis. Pellentesque suscipit
            malesuada lacus a facilisis. Maecenas venenatis quam nisi. Vivamus
            erat est, euismod porttitor risus eget, eleifend aliquet arcu.
            Nullam commodo finibus fringilla.
          </p>
        </div>
      </div>

      <div className={`${styles.units}`}>
        {customarmy.unitsinarmy.length === 0 ? (
          <div className={`${styles.noUnits}`}>
            <h2>No Units!</h2>
            <p>
              Visit the categories page <a href="../../../categories">here</a>{" "}
              to find some units to add to your army!
            </p>
          </div>
        ) : (
          <div className={`${styles.units}`}>
            {customarmy.unitsinarmy.map((unit) => {
              if (unit.line === 1) {
                return (
                  <div key={unit.unit_id}>
                    <UnitDisplay
                      unitsinarmyid={unit.unitsinarmyid}
                      unitId={unit.unit_id}
                      name={unit.name}
                      imageURL="https://placehold.co/200x300"
                      armyId={customarmy.customarmytype}
                      customarmyDisplay={true}
                    />
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default CustomArmy;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const caid = ctx.query.caid;

  if (typeof caid !== "string") {
    return {
      notFound: true,
    };
  }

  // const customarmy = await prisma.customarmy.findUnique({
  //   where: { customarmyid: +caid },
  //   include: {
  //     unitsinarmy: {
  //       where: { customarmyid: +caid },
  //     },
  //   },
  // });

  const customarmy = await prisma.customarmy.findUnique({
    where: { customarmyid: +caid },
  });

  if (!customarmy) {
    return {
      notFound: true,
    };
  }

  const unitsinarmy = await prisma.unitsinarmy.findMany({
    where: { customarmyid: +caid },
  });

  return { props: { ...customarmy, unitsinarmy } };
};
