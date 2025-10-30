import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function BookBoxHome() {
  const [category, setCategory] = useState("saude");

  const categories = [
    { key: "saude", name: "Saúde e Bem-Estar" },
    { key: "entretenimento", name: "Entretenimento" },
    { key: "historia", name: "História" },
    { key: "politica", name: "Política" },
    { key: "religiao", name: "Religião" },
    { key: "educacao", name: "Educação" },
    { key: "financas", name: "Finanças e Negócios" },
  ];

  const ebooks = {
    saude: [
      { title: "Alimente sua Mente", author: "Dr. Silva", price: "R$ 19,90" },
      { title: "Sono Restaurador", author: "Clara Mendes", price: "R$ 15,90" },
    ],
    entretenimento: [
      { title: "Cinema em Casa", author: "Rafael Dias", price: "R$ 12,90" },
      { title: "Humor Brasileiro", author: "Paulo Lima", price: "R$ 9,90" },
    ],
    historia: [
      { title: "Império Romano em Detalhes", author: "A. Vieira", price: "R$ 25,00" },
      { title: "Grandes Descobrimentos", author: "L. Tavares", price: "R$ 22,90" },
    ],
    politica: [
      { title: "Democracia Moderna", author: "Marina Rocha", price: "R$ 18,90" },
      { title: "Estratégias de Poder", author: "Carlos Rezende", price: "R$ 21,90" },
    ],
    religiao: [
      { title: "A Fé que Transforma", author: "Padre João", price: "R$ 16,90" },
      { title: "Caminhos da Alma", author: "Irmã Helena", price: "R$ 17,90" },
    ],
    educacao: [
      { title: "Aprenda com Foco", author: "Beatriz Lopes", price: "R$ 14,90" },
      { title: "Estudo Eficiente", author: "Rodrigo Sampaio", price: "R$ 11,90" },
    ],
    financas: [
      { title: "Riqueza Digital", author: "Tiago Moreira", price: "R$ 29,90" },
      { title: "Mentalidade de Investidor", author: "Bruno Peres", price: "R$ 27,90" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white p-4 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">BOOK-BOX</h1>
        <nav className="flex gap-4">
          <Button variant="secondary">Crie sua conta</Button>
          <Button variant="secondary">Crie seu E-book!</Button>
          <Button variant="secondary">Anuncie aqui!</Button>
          <Button variant="default" className="bg-yellow-400 text-blue-900">
            Faça parte do maior banco de e-books do Brasil!
          </Button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {categories.map((cat) => (
            <Button
              key={cat.key}
              onClick={() => setCategory(cat.key)}
              className={`w-full ${category === cat.key ? "bg-blue-700 text-white" : "bg-white text-blue-700 border"}`}
            >
              {cat.name}
            </Button>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ebooks[category].map((book, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition border border-gray-200">
              <CardContent className="p-4">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 italic">
                  Capa do E-book
                </div>
                <h3 className="font-semibold text-lg text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.author}</p>
                <p className="text-blue-700 font-bold mt-2">{book.price}</p>
                <Button className="w-full mt-4 bg-blue-700 text-white">Ver Detalhes</Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </main>

      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p>© 2025 Book-Box Digital Company Ltda. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
