import { Item, Shop } from "./gilded_rose";

describe("Gilded Rose", function () {
    it("should receive proper data of Aged Brie", function () {
        const gildedRose = new Shop([new Item("Aged Brie", 60, 3)]);
        const { items } = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Aged Brie");
        expect(items[0].quality).toEqual(4);
        expect(items[0].sellIn).toEqual(59);
    });

    it("should receive proper data of Backstage passes to a TAFKAL80ETC concert", function () {
        const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 8)]);
        const { items } = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        expect(items[0].quality).toEqual(9);
        expect(items[0].sellIn).toEqual(14);
    });

    it("should receive proper data of Sulfuras, Hand of Ragnaros", function () {
        const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1000, 80)]);
        const { items } = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
        expect(items[0].quality).toEqual(80);
        expect(items[0].sellIn).toEqual(1000);
    });

    it("should receive proper data of Generic, very boring item", function () {
        const gildedRose = new Shop([new Item("Generic, very boring item", 100, 2)]);
        const { items } = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Generic, very boring item");
        expect(items[0].quality).toEqual(1);
        expect(items[0].sellIn).toEqual(99);
    });

    it("should receive proper data of Conjured Item", function () {
        const gildedRose = new Shop([new Item("Conjured Item", 40, 10)]);
        const { items } = gildedRose.updateQuality();
        expect(items[0].name).toEqual("Conjured Item");
        expect(items[0].quality).toEqual(9);
        expect(items[0].sellIn).toEqual(38);
    });

    it("should move Generic, very boring item to discount after clicking Update Quality button two times", function () {
        const gildedRose = new Shop([new Item("Generic, very boring item", 100, 2)]);
        gildedRose.updateQuality();
        const { items, discountItems } = gildedRose.updateQuality();
        expect(items[0]).not.toBeDefined();
        expect(discountItems[0].name).toEqual("Generic, very boring item");
        expect(discountItems[0].quality).toEqual(0);
        expect(discountItems[0].sellIn).toEqual(98);
    });
});
