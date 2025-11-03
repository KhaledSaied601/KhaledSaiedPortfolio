'use client'
import React, { useState } from "react";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    BuildingOffice2Icon,
    BuildingOfficeIcon,
    CubeTransparentIcon,
    GlobeAltIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    Bars3Icon,
    CodeBracketSquareIcon
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Avatar from "../../assets/images/Avatar/idle2.webp";
import { Link } from "react-router-dom";

export function SideBar() {
    const [open, setOpen] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <div className="fixed z-30 top-1/3 left-0 flex flex-row">
                <IconButton
                    variant="text"
                    size="lg"
                    className="bg-white bg-opacity-65 rounded-s-none hover:text-white transition-all duration-500"
                    onClick={openDrawer}
                >
                    {!isDrawerOpen && <Bars3Icon className="h-8 w-8 stroke-2" />}
                </IconButton>

                <Drawer
                    className="bg-black bg-opacity-95 backdrop-blur-lg"
                    open={isDrawerOpen}
                    onClose={closeDrawer}
                >
                    <Card
                        color="transparent"
                        shadow={false}
                        // 👇 Added scrollable section
                        className="h-[calc(100vh-2rem)] w-full p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 hover:scrollbar-thumb-gray-500"
                    >
                        {/* Profile Header */}
                        <div className="flex-col items-center sm:mb-5">
                            <div className="mb-2 flex items-center gap-4 p-4">
                                <FontAwesomeIcon size="2xl" style={{ color: "white" }} icon={faGithub} />
                                <Typography variant="h5" color="white">
                                    Khaled Saied
                                </Typography>
                            </div>
                            <div className="relative w-full h-52">
                                <img className="rounded-xl w-full h-full object-cover" src={Avatar} alt="" />
                            </div>
                        </div>

                        {/* Sidebar List */}
                        <List>
                            {/* Dashboard */}
                            <ListItem className="text-white hover:text-black">
                                <ListItemPrefix>
                                    <PresentationChartBarIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                <Link to="/KhaledSaiedPortfolio">Dashboard</Link>
                            </ListItem>

                            {/* BIM Projects */}
                            <Accordion
                                open={open === 1}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${
                                            open === 1 ? "rotate-180" : ""
                                        }`}
                                    />
                                }
                            >
                                <ListItem className="p-0 hover:text-black" selected={open === 1}>
                                    <AccordionHeader
                                        onClick={() => handleOpen(1)}
                                        className="border-b-0 p-3 text-white"
                                    >
                                        <ListItemPrefix>
                                            <BuildingOffice2Icon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        <Typography className="mr-auto font-normal">BIM Projects</Typography>
                                    </AccordionHeader>
                                </ListItem>

                                <AccordionBody className="py-1">
                                    <List className="p-0 text-white">
                                       
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="bimProjects/exit10">EXT 10</Link>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="bimProjects/rsAmaalaMarina">Red Sea Amaala Marina</Link>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="bimProjects/rsAirport">Red Sea Airport</Link>
                                        </ListItem>



                                    </List>
                                </AccordionBody>


                            </Accordion>





                     {/* Freelance */}
                            <Accordion
                                open={open === 2}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${
                                            open === 2 ? "rotate-180" : ""
                                        }`}
                                    />
                                }
                            >
                                <ListItem className="p-0" selected={open === 2}>
                                    <AccordionHeader
                                        onClick={() => handleOpen(2)}
                                        className="border-b-0 p-3 text-white"
                                    >
                                        <ListItemPrefix>
                                            <BuildingOfficeIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        <Typography className="mr-auto font-normal">Freelance Projects</Typography>
                                    </AccordionHeader>
                                </ListItem>
                                <AccordionBody className="py-1">
                               
                                    <List className="p-0 text-white">

                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="computationalProjects/qiddyaEntertainmentFacade">
                                                QIDDIYA SOLID WASTE TRANSFER HUB
                                            </Link>
                                        </ListItem>

                                       <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="computationalProjects/zoodTowers">
                                                ZOOD TOWERS
                                            </Link>
                                        </ListItem>

                                    </List>
                                </AccordionBody>
                            </Accordion>




                           {/* Computational */}
                            <Accordion
                                open={open === 3}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${
                                            open === 3 ? "rotate-180" : ""
                                        }`}
                                    />
                                }
                            >
                                <ListItem className="p-0" selected={open === 3}>
                                    <AccordionHeader
                                        onClick={() => handleOpen(3)}
                                        className="border-b-0 p-3 text-white"
                                    >
                                        <ListItemPrefix>
                                            <CubeTransparentIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        <Typography className="mr-auto font-normal">Computational</Typography>
                                    </AccordionHeader>
                                </ListItem>
                                <AccordionBody className="py-1">
                               
                                    <List className="p-0 text-white">

                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="computationalProjects/qiddyaEntertainmentFacade">
                                                QIDDIYA SOLID WASTE TRANSFER HUB
                                            </Link>
                                        </ListItem>

                                       <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="computationalProjects/zoodTowers">
                                                ZOOD TOWERS
                                            </Link>
                                        </ListItem>

                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="computationalDesign/grasshopperScripts">Grasshopper Case Studies</Link>
                                        </ListItem>
                                    </List>
                                </AccordionBody>
                            </Accordion>



                            {/* Development */}
                            <Accordion
                                open={open === 5}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${
                                            open === 5 ? "rotate-180" : ""
                                        }`}
                                    />
                                }
                            >
                                <ListItem className="p-0" selected={open === 5}>
                                    <AccordionHeader
                                        onClick={() => handleOpen(5)}
                                        className="border-b-0 p-3 text-white"
                                    >
                                        <ListItemPrefix>
                                            <CodeBracketSquareIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        <Typography className="mr-auto font-normal">Development</Typography>
                                    </AccordionHeader>
                                </ListItem>

                                <AccordionBody className="py-1">
                                    <List className="p-0 text-white">
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="bimDevelopments/titanTurtlePackage">TitanTurtle</Link>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="bimDevelopments/navisworksAddin">Navisworks Add-in</Link>
                                        </ListItem>
                                    </List>
                                </AccordionBody>
                            </Accordion>

             

                            {/* Web Projects */}
                            <Accordion
                                open={open === 6}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${
                                            open === 6 ? "rotate-180" : ""
                                        }`}
                                    />
                                }
                            >
                                <ListItem className="p-0" selected={open === 6}>
                                    <AccordionHeader
                                        onClick={() => handleOpen(6)}
                                        className="border-b-0 p-3 text-white"
                                    >
                                        <ListItemPrefix>
                                            <GlobeAltIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        <Typography className="mr-auto font-normal">Web Projects</Typography>
                                    </AccordionHeader>
                                </ListItem>

                                <AccordionBody className="py-1">
                                    <List className="p-0 text-white">
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="https://khaledsaied601.github.io/Ecommerce" target="_blank">
                                                React E-Commerce
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="https://khaledsaied601.github.io/Galaxy/" target="_blank">
                                                Three.JS Galaxy
                                            </Link>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link to="https://khaledsaied601.github.io/Hunted-House/" target="_blank">
                                                Three.JS Hunted House
                                            </Link>
                                        </ListItem>
                                    </List>
                                </AccordionBody>
                            </Accordion>



                        </List>
                    </Card>
                </Drawer>
            </div>
        </>
    );
}
