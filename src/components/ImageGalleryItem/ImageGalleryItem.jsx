import { Images, Item } from './ImageGalleryItem.styled';
import React, { PureComponent } from 'react';

export class ImageGalleryItem extends PureComponent {
  render() {
    const { largeImageURL, webformatURL, tags, id } = this.props;

    return (
      <Item>
        <Images id={id} data={largeImageURL} src={webformatURL} alt={tags} />
      </Item>
    );
  }
}
