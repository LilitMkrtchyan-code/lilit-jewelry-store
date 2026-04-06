import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Collection = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      navigate(`/catalog?collection=${slug}`, { replace: true });
    }
  }, [slug, navigate]);

  return null;
};

export default Collection;
