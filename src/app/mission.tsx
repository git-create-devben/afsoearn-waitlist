import Image from "next/image"
import rectangle1 from "../../public/images/Rectangle (1).png"
import rectangle2 from "../../public/images/Rectangle (2).png"
import rectangle3 from "../../public/images/Rectangle.png"
export default function Mission(){
    return(
        <main className="flex flex-col p-10">
            <section>
                Image
            </section>
            <section className="flex justify-between">
                <div>
              Text
                </div>
                <div>
            Imagelist
                </div>
            </section>
          
        </main>
    )

}