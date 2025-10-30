import { mutation } from "./_generated/server";

export const seedPoems = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear any existing poems
    const existingPoems = await ctx.db.query("poems").collect();
    for (const poem of existingPoems) {
      await ctx.db.delete(poem._id);
    }

    // Add poems based on your current hardcoded layout
    const poemsData = [
      {
        title: "Rainbow Tears",
        imageUrl: "/Assets/RainbowTears_Final.png",
        alt: "Rainbow Tears",
        width: 500,
        height: 500,
        animationDirection: "left",
        initialX: -300,
        justifyPosition: "start",
        paddingLeft: "pl-[5%]",
        paddingBottom: "pb-[30%]",
        order: 1,
      },
      {
        title: "PsyberDelic",
        imageUrl: "/Assets/PsyberDelic_Final.png",
        alt: "PsyberDelic",
        width: 800,
        height: 800,
        animationDirection: "right",
        initialX: 250,
        justifyPosition: "start",
        paddingLeft: "pl-[15%]",
        paddingBottom: "pb-[13%]",
        order: 2,
      },
      {
        title: "Trust",
        imageUrl: "/Assets/Trust-Iridescent.png",
        alt: "Trust",
        width: 500,
        height: 500,
        animationDirection: "left",
        initialX: -400,
        justifyPosition: "center",
        paddingBottom: "pb-[10%]",
        order: 3,
      },
      {
        title: "Your Song",
        imageUrl: "/Assets/YourSong_Final.png",
        alt: "Your Song",
        width: 360,
        height: 360,
        animationDirection: "right",
        initialX: 300,
        justifyPosition: "start",
        paddingLeft: "pl-[13%]",
        paddingBottom: "pb-[3%]",
        order: 4,
      },
      {
        title: "Luscious Death",
        imageUrl: "/Assets/LusciousDeath_Final.png",
        alt: "Luscious Death",
        width: 500,
        height: 500,
        animationDirection: "left",
        initialX: -300,
        justifyPosition: "start",
        paddingLeft: "pl-[18%]",
        paddingBottom: "pb-[10%]",
        order: 5,
      },
      {
        title: "Mad Kiss",
        imageUrl: "/Assets/MadKiss_Final.png",
        alt: "Mad Kiss",
        width: 800,
        height: 800,
        animationDirection: "right",
        initialX: 300,
        justifyPosition: "start",
        paddingLeft: "pl-[10%]",
        paddingBottom: "pb-[10%]",
        order: 6,
      },
    ];

    // Insert all poems
    for (const poem of poemsData) {
      await ctx.db.insert("poems", poem);
    }

    return `Seeded ${poemsData.length} poems successfully!`;
  },
});