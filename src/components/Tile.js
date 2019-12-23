// @flow

import React from 'react';
import type {Node} from 'react';
import styles from './tile.module.css';

type Props = {|
    children: Node,
    onClick?: () => void,
|};

export default function Tile({children, onClick}: Props) {
    return (
        <li className={styles.tile} onClick={onClick}>
            {children}
        </li>
    );
}
