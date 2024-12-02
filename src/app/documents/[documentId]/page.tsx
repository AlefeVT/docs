import Editor from "./editor";
import Toolbar from "./toolbar";

interface DocumentIdPage {
  params: Promise<{ documentId: string }>;
}
const DocumentIdPage = async ({ params }: DocumentIdPage) => {
  const { documentId } = await params;

  return (
    <div>
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
