import React, { useContext } from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";

import CollectionsContext from "../../contexts/collections/collections.context";

import "./collections-overview.styles.scss";

const CollectionsOverview = () => {
  const collectionsData = useContext(CollectionsContext);
  const collections = Object.keys(collectionsData).map(
    (key) => collectionsData[key]
  );

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
