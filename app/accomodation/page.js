import Floor from "@/Components/Floor";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Tables from "@/Components/Tables Section/Tables";
import React from "react";
import text from "../../public/text.json";
import Information from "@/Components/Information";

export default function Page() {
  return (
    <main>
      <Tables />
      <Floor heading="Ground Floor" desc={text.first_floor} />
      <Floor heading="First Floor" desc={text.ground_floor} />
      <Information />
    </main>
  );
}
