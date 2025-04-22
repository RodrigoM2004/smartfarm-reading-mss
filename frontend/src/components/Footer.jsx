import Button from "./ui/Button";

export default function Footer() {
  return (
    <div className="bg-green-600 bg-gradient-to-b py-12">
      <div className="container mx-auto text-center text-white py-12 px-4">
        <h2 className="font-bold text-4xl md:text-5xl mb-8">
          Pronto para transformar sua fazenda?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Comece hoje mesmo e veja os resultados em sua próxima colheita.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button> Solicitar Demonstração</Button>
          <Button background="bg-white" text="text-green-600" hover="hover:bg-gray-200">Fale com nossa equipe</Button>
        </div>  
      </div>
    </div>
  );
}
