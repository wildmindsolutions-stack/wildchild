import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import TechnologiesGrid from "../components/TechnologiesGrid";

export const metadata: Metadata = {
  title: "Technologies — Best AR VR & Projection Mapping Tech in Ahmedabad, Gujarat & India",
  description:
    "Master immersive technologies with WildChild Studios in Ahmedabad: 3D projection mapping, VR technology, AR technology, LIDAR, motion capture, holographic projection and interactive kiosks across Gujarat and India.",
  alternates: { canonical: "/technologies" },
  keywords: [
    "immersive technologies India",
    "best 3D projection mapping Ahmedabad",
    "AR VR technology Gujarat",
    "VR technology India",
    "AR technology Ahmedabad",
    "holographic projection India",
    "motion capture Gujarat",
    "LIDAR scanning India"
  ]
};

export default function TechnologiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technologies we master"
        title="The full immersive technology toolkit."
        description="Our experience across these technologies has grown so much that we've become one of the best creative solution providers in the country. Explore each one in detail."
      />

      <section className="section-page">
        <div className="container-wc">
          <TechnologiesGrid className="" />
        </div>
      </section>

      <CTA />
    </>
  );
}
