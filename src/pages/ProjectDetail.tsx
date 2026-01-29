import { useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      {/* Project detail page - ID: {id} */}
    </div>
  );
}
