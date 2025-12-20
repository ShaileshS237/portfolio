import React from "react";
import Navbar from "@/Components/Navbar";
import PageHeader from "@/Components/PageHeader";
import PageContainer, { MainContent } from "@/Components/PageContainer";
import GearSection from "@/Components/GearSection";
import Footer from "@/Components/Footer";
import { motion } from "framer-motion";

const Gear = () => {
    return (
        <PageContainer title="Gear">
            <Navbar backToHome={true} title="Gear" />
            <MainContent>
                <PageHeader
                    title="Gear"
                    description="The tools, hardware, and software I use to build things every day."
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <GearSection />
                </motion.div>

            </MainContent>
        </PageContainer>
    );
};

export default Gear;
