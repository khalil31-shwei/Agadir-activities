export default function Navbar(){
    return(
        <>
<nav class="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        
    <a class="text-indigo-600">
        <img className="w-13 md:w-13" src="https://agadiractivities.com/wp-content/uploads/2022/02/tinywow_remove_bg_880681-e1645315319282.png" alt="" />
    </a>
    <ul class="md:flex hidden items-center gap-10">
        <li><a class="hover:text-gray-500/80 transition" href="#" type="list" >Home</a></li>
        <li><a class="hover:text-gray-500/80 transition" href="#" >To do in Agadir</a></li>
        <li><a class="hover:text-gray-500/80 transition" href="#" >Tours from Agadir</a></li>
        <li><a class="hover:text-gray-500/80 transition" href="#" >To do in Taghazout</a></li>
        <li><a class="hover:text-gray-500/80 transition" href="#" >Sahara Desert & Imperial Tours</a></li>
        <li><a class="hover:text-gray-500/80 transition" href="#" >Airport Transfers Agadir</a></li>
        <li><a class="hover:text-gray-500/80 transition" href="/contact" >Contact Us</a></li>
    </ul>
</nav>
        </>
    )
}