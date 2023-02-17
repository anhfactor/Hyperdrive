import Head from "next/head";
import { Settings } from "@/components/Settings/Settings";

import Molecules from "@libs/ui/src/molecules";

export default function SettingsPage() {
  return (
    <>
      <Head>
        <title>Aggregate</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Molecules.DarkNavbar />
        <Settings/>
      <Molecules.Footer />
    </>
  );
}
