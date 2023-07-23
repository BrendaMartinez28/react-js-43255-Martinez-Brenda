const products = [
    {
        id: "1",
    name: "Placa de Video Asrock Radeon RX 570 8GB GDDR5 Phantom Gaming",
    price: "85.000",
    category: "Placas de video",
    img: "https://pg.asrock.com/Graphics-Card/photo/Phantom%20Gaming%20D%20Radeon%20RX570%204G(L1).png",
    stock: 20,
        description: "Descripcion rx 570 8GB"
    },

    {
        id: "2",
    name: "Procesador AMD Ryzen 5 5600G 4.4GHz Turbo + Wraith Stealth Cooler ",
    price: "98.000",
    category: "Procesadores",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27675_Procesador_AMD_Ryzen_5_5600G_4.4GHz_Turbo___Wraith_Stealth_Cooler_d4e323ea-grn.jpg",
    stock: 15,
        description: "Descripcion procesador AMD RYZEN 5 5600G"
    },
    {
        id: "3",
    name: "Silla Gamer Vertagear Racing Series SL1200 HygennX Negro ",
    price: "165.000",
    category: "Sillas Gamer",
    img: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_36971_Silla_Gamer_Vertagear_Racing_Series_SL1200_HygennX_Negro_d1bf78a7-grn.jpg",
    stock: 10,
        description: "Descripcion silla gamer negra"
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductsById = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === getProductsById))
        }, 200)
    })
}