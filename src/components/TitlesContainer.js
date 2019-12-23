// @flow

import React from 'react';
import type {Node} from 'react';
import styles from './tilesContainer.module.css';

type Props = {|
    children: Node,
|};

export default function TileContainer({children}: Props) {
    return <ul className={styles.container}>{children}</ul>;
}
