import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Category = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (categorySlug) {
      navigate(`/catalog?category=${categorySlug}`, { replace: true });
    }
  }, [categorySlug, navigate]);

  return null;
};

export default Category;
