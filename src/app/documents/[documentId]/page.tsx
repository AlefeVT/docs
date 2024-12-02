import Editor from "./editor";

interface DocumentIdPage {
  params: Promise<{ documentId: string }>;
}
const DocumentIdPage = async ({ params }: DocumentIdPage) => {
  const { documentId } = await params;

  return (
    <div>
      Document Id: {documentId}
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
