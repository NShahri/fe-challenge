// @flow

import React from 'react';
import {ReactComponent as AddIcon} from '../resources/add_circle_outline-24px.svg';
import styles from './newIdeaTile.module.css';

export default function NewIdeaTile() {
    return (
        <div className={styles.clickable} data-testid="addNew">
            <div>Click here to add new idea</div>
            <AddIcon />
        </div>
    );
}
