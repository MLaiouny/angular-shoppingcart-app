import { Fruit } from './fruit.model';

export class FruitService {
    private fruits: Fruit[] = [
        new Fruit(
            'http://eathealthylivefit.com/wp-content/uploads/2013/02/apple-red-e1361844844713.jpg',
            'Apple',
            'Delicious and crunchy, apple fruit is one of the most popular and favorite fruits among the health conscious, fitness lovers who firmly believe in the concept of “health is wealth.',
            'Delicious and crunchy, apple fruit is one of the most popular and favorite fruits among the health conscious, fitness lovers who firmly believe in the concept of “health is wealth.” This wonderful fruit indeed packed with rich phytonutrients that in the real sense indispensable for optimal health and wellness. Certain antioxidants in apples have health promoting and disease prevention properties, and thereby, truly justifying the adage, “an apple a day keeps the doctor away.',
            3),
        new Fruit(
           'https://media.istockphoto.com/photos/isolated-orange-fruit-and-slices-picture-id508878814',
           'Orange',
            'Orange, or more specifically sweet orange, is a citrus fruit belonging to the Rutaceae family which also includes pomelo, tangerine, and grapefruit. Orange tree is an evergreen tree that grows widely in tropical and subtropical climates',
            'Orange, or more specifically sweet orange, is a citrus fruit belonging to the Rutaceae family which also includes pomelo, tangerine, and grapefruit. Orange tree is an evergreen tree that grows widely in tropical and subtropical climates. A typical orange is a spherical fruit weighing about 100 to 150 grams and measuring about 3 inches in diameter. They contain carpels with several fluid vessels which are specialized hair cells. Oranges are generally classified into 2 categories- sweet and bitter. The sweet varieties are more widely consumed while the bitter ones form part of other recipes. Popular varieties of sweet oranges include Persian variety, Valencia, Navel and Blood orange. Tangerines or mandarin oranges are related varieties of oranges which have loose easily peeled shin (pericarp) and sweet juicy flesh.',
            3),
        new Fruit(
            'https://media.gettyimages.com/photos/banana-bunch-picture-id173242750',
            'Banana',
            "Enjoy banana fruit nature's energy-rich food that comes with a safety envelope! Fresh, creamy, and delicious dessert bananas are one of the cheapest and readily available fruits all year round. Botanically, it belongs to the family of Musaceae. Commercially, it is one of the widely cultivated crops in the tropical and subtropical zones. Scientific name: Musa acuminata col",
            'Enjoy banana fruit natures energy-rich food that comes with a safety envelope! Fresh, creamy, and delicious dessert bananas are one of the cheapest and readily available fruits all year round. Botanically, it belongs to the family of Musaceae. Commercially, it is one of the widely cultivated crops in the tropical and subtropical zones. Scientific name: Musa acuminata col.Banana is a perennial herbaceous plant that grows from the underground rhizome. It flourishes well under tropical, moisture-rich, humid, low-lying farmlands. Banana has unique growth characteristics. In fact, the whole plant is a false stem (pseudostem). This pseudostem is consisting of broad leaves, together with their long petioles, overlapping each other in a disc-like fashion. The whole plant may reach 2 to 6 meters in height from the ground surface depending upon the cultivar types. At maturity, the rhizome gives rise to a flower (inflorescence) which is carried up along actual (true) core stem (smooth un-branched stem) which pass through the center of the pseudostem. The flower finally emerges out at the top in-between leaf clusters. The inflorescence subsequently develops to a large hanging bunch, consisting of 3 to 20 hands (tiers of fruit), with each hand carrying at least 5-10 fingers (fruits).',
            2),
        new Fruit(
            'https://previews.123rf.com/images/volff/volff1205/volff120500034/13585481-strawberries-with-leaves-isolated-on-a-white-background.jpg',
            'Strawberry',
            'The heart-shaped silhouette of the strawberry is the first clue that this fruit is good for you. These potent little packages protect your heart, increase HDL (good) cholesterol, lower your blood pressure, and guard against cancer. Packed with vitamins, fiber, and particularly high levels of antioxidants known as polyphenols, strawberries are a sodium-free, fat-free, cholesterol-free, low-calorie food. ',
            'The heart-shaped silhouette of the strawberry is the first clue that this fruit is good for you. These potent little packages protect your heart, increase HDL (good) cholesterol, lower your blood pressure, and guard against cancer. Packed with vitamins, fiber, and particularly high levels of antioxidants known as polyphenols, strawberries are a sodium-free, fat-free, cholesterol-free, low-calorie food. They are among the top 20 fruits in antioxidant capacity and are a good source of manganese and potassium. Just one serving -- about eight strawberries -- provides more vitamin C than an orange. This member of the rose family isn’t really a fruit or a berry but the enlarged receptacle of the flower. Choose medium-sized berries that are firm, plump, and deep red; once picked, they don’t ripen further. First cultivated in ancient Rome, strawberries are now the most popular berry fruit in the world. In provincial France, they were regarded as an aphrodisiac. These red gems may be good for your heart in more ways than one.',
            4
        ),
        new Fruit(
           'https://tse3.mm.bing.net/th?id=OIP.pExcFzRcjCWUvWsR22V8GQHaFi&pid=15.1&P=0&w=226&h=170',
           'Kiwi',
           'Health benefits of kiwi include skin care, improved cardiovascular health, lower blood pressure, and prevention of strokes. It also aids in the treatment of cancer, insomnia, macular degeneration, and diabetes. Due to the flavonoid-rich compounds found in kiwi, it also helps during pregnancy and promotes the absorption of iron in the body.',
           'Health benefits of kiwi include skin care, improved cardiovascular health, lower blood pressure, and prevention of strokes. It also aids in the treatment of cancer, insomnia, macular degeneration, and diabetes. Due to the flavonoid-rich compounds found in kiwi, it also helps during pregnancy and promotes the absorption of iron in the body. Besides, the anti-microbial properties of kiwi guard against a range of pathogens and strengthen the immune system.',
           5

        )
    ];

    getFruits() {
        return this.fruits.slice();
    }

    getFruit(index: number) {
        return this.fruits[index];
    }
}