export default async(req, res) => {
    res.json([
        {
            "id": 1,
            "name": "Allosaurus",
            "meaningOfName": "other lizard",
            "diet": "carnivorous",
            "length": "12m",
            "period": "Late Jurassic",
            "info": "Allosaurus was an apex predator in the Late Jurassic in North America.",
            "imageUrl":"./images/dinosaurs/allosaurus.jpg",
            "pricePerShare" : "£86"
        },
        {
            "id": 2,
            "name": "Brachiosaurus",
            "meaningOfName": "arm lizard",
            "diet": "herbivorous",
            "length": "30m",
            "period": "Late Jurassic",
            "info": "Brachiosaurus was a large, North American sauropod dinosaur with an arch encircling its nasal opening.",
            "imageUrl":"./images/dinosaurs/Brachiosaurus.jpg",
            "pricePerShare" : "£97"
        },
        {
            "id": 3,
            "name": "Spinosaurus",
            "meaningOfName": "spine lizard",
            "diet": "carnivorous",
            "length": "18m",
            "period": "Early Cretaceous",
            "info": "Spinosaurus was one of the largest carnivorous dinosaurs to walk the Earth. Its diet consisted mostly of fish and the large spines on its back likely formed a sail.",
            "imageUrl":"./images/dinosaurs/spinosaurus.jpeg",
            "pricePerShare" : "£145"
        },
        {
            "id": 4,
            "name": "Tyrannosaurus",
            "meaningOfName": "tyrant lizard",
            "diet": "carnivorous",
            "length": "12m",
            "period": "Late Cretaceous",
            "info": "Tyrannosaurus is well-represented in both fiction and history with over 50 specimens discovered. It and was one of the last non-avian dinosaurs to exist before the extinction event. Tyrannosaurus had a massive skull and a long heavy tail.",
            "imageUrl":"./images/dinosaurs/trex.jpeg",
            "pricePerShare" : "£261"
        },
        {
            "id": 5,
            "name": "Velociraptor",
            "meaningOfName": "swift seizer",
            "diet": "carnivorous",
            "length": "12m",
            "period": "Late Cretaceous",
            "info": "Velociraptors were actually feathered animals. They grew up to 100 pounds, about the size of a wolf. And they likely hunted solo—using their claws to clutch rather than slash prey—when they roamed central and eastern Asia between about 74 million and 70 million years ago, during the late Cretaceous period.",
            "imageUrl":"./images/dinosaurs/velociraptor.jpeg",
            "pricePerShare" : "£172"
        }
    ])
}