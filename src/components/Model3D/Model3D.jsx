import React, { useEffect } from 'react'



import * as OBC from '@thatopen/components'
import * as OBCF from '@thatopen/components-front'
import * as BUI from "@thatopen/ui"
import $ from "jquery";
import * as THREE from "three";






function Model3D({ model, setIsShowed, setModelPath }) {



    useEffect(() => {

        //Get the Canvas
        const container = document.getElementById("app");



        //onMounting
        //Scale 

        $('.model-3D-section').animate({
            scale: '1',
            opacity: '100%'
        }, 500)


        let group = null
        let fragments = null


        if (container) {




            if (container.hasChildNodes()) {
                return
            }





            //Get the Components
            const components = new OBC.Components();

            //Get our Worlds
            const worlds = components.get(OBC.Worlds);

            //Create Our World
            const world = worlds.create()



            //Define World Parameter
            world.scene = new OBC.SimpleScene(components)
            world.renderer = new OBCF.PostproductionRenderer(components, container)
            world.camera = new OBC.OrthoPerspectiveCamera(components)


            //Start Render
            components.init()

            //Make a Transparent Canvas
            world.scene.three.background = null

            //Make some Setups
            world.scene.setup()


            // // Create Grids
            // const grids = components.get(OBC.Grids)
            // grids.config.color.set(new THREE.Color(0x9C27B0))
            // grids.config.distance = 1000
            // const grid = grids.create(world);





            //Size
            const Size = {
                width: window.innerWidth,
                height: window.innerHeight
            }



            //Set Size
            world.renderer.three.setSize(Size.width, Size.height)





            //HighLighter
            const highlighter = components.get(OBCF.Highlighter);
            highlighter.setup({ world });
            highlighter.zoomToSelection = true;






            //Get The Fragments Manger
            fragments = components.get(OBC.FragmentsManager);





            //Get our Model Fragment and Add it to the Scene
            (async function loadFragments() {


                if (fragments.groups.size) {

                    return;
                }


                const file = await fetch(model);

                console.log(file);


                const data = await file.arrayBuffer();

                const buffer = new Uint8Array(data);

                group = fragments.load(buffer);

                group.children.forEach((le) => {
                    le.material[0].side = 2;

                })


                world.scene.three.add(group);





                //Fit The Camera
                world.camera.fit([group], 1)


            })()








            //Make UI for Canvas 
            BUI.Manager.init();

            const panel = BUI.Component.create(() => {
                return BUI.html`
                
                
                 <bim-panel collapsed label="Controls" class="options-menu absolute top-2 right-2  bg-gradient-to-t from-pink-500 to-purple-500 w-[75%] sm:w-1/4  ">

                     <bim-panel-section collapsed label="Camera">
                
                            <bim-button 
                           label="Fit" 
                            @click="${() => {
                        world.camera.fit([group], 1);
                    }}">  
                          </bim-button>
                
                
                     </bim-panel-section>
                </bim-panel>
                
                `



            })

            $('#app').append(panel)



            //Make Setting Button 
            const button = BUI.Component.create(() => {
                return BUI.html`
                    <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
                      @click="${() => {
                        if (panel.classList.contains("options-menu-visible")) {
                            panel.classList.remove("options-menu-visible");
                        } else {
                            panel.classList.add("options-menu-visible");
                        }
                    }}">
                    </bim-button>
                  `;
            });

            $('#app').append(button)

        }


        // onClosing

        $('.model-3D-section').on('click', (e) => {

            e.stopPropagation()



            if (e.target == $('.model-3D-section')[0]) {


                $('.model-3D-section').animate({
                    scale: '0',
                    opacity: '0'
                }, 500, () => { setIsShowed(false); setModelPath(''); fragments?.dispose(); })

            }




        })


    }, [])

    useEffect(() => {




    }, [])

    return (

        <>
            <div style={{ scale: 0, opacity: 0 }} className="model-3D-section h-screen w-screen bg-black bg-opacity-85  fixed top-0 left-0 z-40   ">

                <div id='app' className=' overflow-hidden rounded-xl w-1/2 h-1/2 absolute top-0  left-0 translate-x-1/2 translate-y-1/2    bg-white flex flex-row' ></div>

            </div>
        </>





    )
}

export default Model3D
