const CarouselBox = () => {
  return (
    <div className="flex justify-center py-8 bg-white dark:bg-[#012737] text-black dark:text-white">
      <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between w-full px-4 space-y-8 md:space-y-0">
        {/* Section de texte */}
        <section className="text-section md:w-1/2 flex flex-col justify-center items-start space-y-4">
          <h1>Comparer les Meilleures Offres Box</h1>
          <p className="mb-4">
            Découvrez les meilleures offres en un clin d&apos;œil ! Chaque jour, nous comparons <strong>des centaines de forfaits</strong> mobiles, Box Internet et Énergie Gaz et Électricité pour vous dénicher celui qui vous correspond parfaitement.
          </p>
         
        </section>
      </div>
    </div>
  );
};

export default CarouselBox;
