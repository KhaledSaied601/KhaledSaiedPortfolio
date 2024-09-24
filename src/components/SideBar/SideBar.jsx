'use client'
import React from "react";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    BuildingLibraryIcon,
    BuildingOffice2Icon,
    Square3Stack3DIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/solid"
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Avatar from "../../assets/Avatar/idle2.webp"
import { Link } from "react-router-dom";






export function SideBar() {



    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>

            <div className="fixed z-30 top-1/3 left-0  flex flex-row ">





                <IconButton  variant="text" size="lg" className="bg-white bg-opacity-65 rounded-s-none hover:text-white transition-all duration-500  " onClick={openDrawer}>

                    {isDrawerOpen ? (
                        null
                    ) : (
                        <Bars3Icon className="h-8 w-8 stroke-2" />
                    )}
                </IconButton>

                <Drawer className="bg-gradient-to-t to-white from-black  " open={isDrawerOpen} onClose={closeDrawer}>


                    <Card

                        color="transparent"

                        shadow={false}
                        className="h-[calc(100vh-2rem)] w-full p-4"
                    >

                        <div className="flex-col items-center mb-5">

                            <div className="mb-2 flex items-center gap-4 p-4">
                                <FontAwesomeIcon size="2xl" style={{ color: 'black' }} icon={faGithub} />
                                <Typography variant="h5" color="black">
                                    Khaled Saied
                                </Typography>
                            </div>
                            <div className="relative w-full h-64">

                                <img  className="rounded-xl w-full object-cover"  src={Avatar} alt="" />


                            </div>
                        </div>







                        <List>

                            <Accordion
                                open={open === 1}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                                            }`}
                                    />
                                }
                            >




                                <ListItem className="text-black">
                                    <ListItemPrefix>
                                        <PresentationChartBarIcon className="h-5 w-5 " />

                                    </ListItemPrefix>
                                    <Link href='/KhaledSaiedPortfolio'>
                                        Dashboard
                                    </Link>
                                </ListItem>




                                <ListItem className="p-0" selected={open === 1}>

                                    <AccordionHeader
                                        onClick={() => handleOpen(1)}
                                        className="border-b-0 p-3 text-black"
                                    >
                                        <ListItemPrefix>
                                            <BuildingOffice2Icon className="h-5 w-5 text-black" />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className="mr-auto font-normal text-black">
                                            BIM Projects
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>


                                <AccordionBody className="py-1 ">

                                    <List className="p-0">
                                        <ListItem className="text-black">
                                            <ListItemPrefix >
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>

                                            <Link to='bimProjects/exit10'>EXT 10</Link>

                                        </ListItem>

                                        <ListItem className="text-black">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>

                                            <Link
                                                to="bimProjects/rsAmaalaMarina">
                                                Red Sea Amaala Marina
                                            </Link>

                                        </ListItem>

                                        <ListItem className="text-black">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>


                                            <Link
                                                to="bimProjects/rsAirport">
                                                Red Sea Airport
                                            </Link>

                                        </ListItem>

                                        <ListItem className="text-black">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>


                                            <Link
                                                to="bimDevelopments/navisworksAddin">
                                                Navisworks Add-in
                                            </Link>

                                        </ListItem>

                                        {/* <ListItem className="text-black">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>


                      <Link
                        href="">
                        Revit APIs
                      </Link>

                    </ListItem>


                    <ListItem className="text-black">
                      <ListItemPrefix>
                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>


                      <Link
                        href="">
                        Tekla APIs
                      </Link>

                    </ListItem> */}



                                    </List>
                                </AccordionBody>
                            </Accordion>






                            <Accordion
                                open={open === 2}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                                            }`}
                                    />
                                }
                            >
                                <ListItem className="p-0" selected={open === 2}>
                                    <AccordionHeader
                                        onClick={() => handleOpen(2)}
                                        className="border-b-0 p-3 text-black"
                                    >
                                        <ListItemPrefix>
                                            <GlobeAltIcon className="h-5 w-5" />
                                        </ListItemPrefix>

                                        <Typography className="mr-auto font-normal">
                                            Web Projects
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>

                                <AccordionBody className="py-1">

                                    <List className="p-0 text-black">

                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>

                                            <Link
                                                to="https://khaledsaied601.github.io/Ecommerce"
                                                target='_blank'>
                                                React E-Commerce

                                            </Link>

                                        </ListItem>

                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link
                                                to="https://khaledsaied601.github.io/Galaxy/"
                                                target='_blank'>

                                                Three.JS Galaxy
                                            </Link>
                                        </ListItem>


                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            <Link
                                                to="https://khaledsaied601.github.io/Hunted-House/"
                                                target='_blank'>

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