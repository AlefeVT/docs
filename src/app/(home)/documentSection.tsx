"use client";

import { useQuery } from "@tanstack/react-query";

type DocumentType = {
  id: string;
  title: string;
  createdAt: string; // Agora uma string serializada
};

async function fetchDocuments(): Promise<DocumentType[]> {
  const response = await fetch("/api/v1/documents");
  if (!response.ok) {
    throw new Error("Failed to fetch documents");
  }
  return response.json();
}

export function DocumentsSection() {
  const { data, error, isLoading } = useQuery<DocumentType[]>({
    queryKey: ["documents"],
    queryFn: fetchDocuments,
    refetchInterval: 5000,
  });

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar documentos.</p>;
  }

  if (!data || data.length === 0) {
    return <p>Nenhum documento encontrado.</p>;
  }

  return (
    <ul>
      {data.map((doc) => (
        <li key={doc.id}>
          <p>{doc.title}</p>
          <p>Criado em: {new Date(doc.createdAt).toLocaleString("pt-BR")}</p>
        </li>
      ))}
    </ul>
  );
}
