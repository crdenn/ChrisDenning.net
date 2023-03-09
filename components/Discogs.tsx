import React from 'react';
import fetchCollectionItems from '../discogs.js';

interface Props {
  folderId: number; // Change the type of this prop to match your folder ID type
}

interface CollectionItem {
    id: number;
    title: string;
    cover_image: string;
    basic_information: object; // Add this line
}

const Discogs: React.FC<Props> = ({ folderId }) => {
  // Call the fetchCollectionItems function inside the component
  const [collectionItems, setCollectionItems] = React.useState<CollectionItem[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      console.log('fetching data...');
      const items = await fetchCollectionItems(folderId);
      console.log('data fetched: ', items);
      setCollectionItems(items);
    };
    fetchData();
  }, [folderId]);

  console.log('collection items: ', collectionItems);

  return (
    <div className="flex flex-wrap">
      {collectionItems &&
        collectionItems.map((item) => (
          <div className="w-1/4 p-2">
            <img src={item.basic_information.cover_image} alt={item.basic_information.title} className="object-cover w-full h-full" />
          </div>
        ))}
    </div>
  );
};

export async function getStaticProps() {
  const folderId = 290644; // Replace this with your actual folder ID
  console.log('fetching data...');
  const collectionItems = await fetchCollectionItems(folderId);
  console.log('data fetched: ', collectionItems);
  return {
    props: {
      collectionItems,
    },
  };
}

export default Discogs;
