// @flow

import React, {useRef} from 'react';
import type {Idea} from '../apiClients';
import {ReactComponent as DeleteIcon} from '../resources/delete-24px.svg';
import styles from './ideaTile.module.css';
import classNames from 'classnames';

type Props = {|
    idea?: Idea,
    onDelete?: () => any,
    onChange: Idea => void,
    onCancel: () => void,
    autoFocusTitle: boolean,
|};

export default function IdeaTile({
    idea,
    onDelete,
    onChange = () => {},
    onCancel = () => {},
    autoFocusTitle = false,
}: Props) {
    const titleInput = useRef(null);
    const bodyInput = useRef(null);

    const defaultTitle = idea?.title || '';
    const defaultBody = idea?.body || '';

    function onBlur() {
        if (titleInput.current?.value !== defaultTitle || bodyInput.current?.value !== defaultBody) {
            onChange({...idea, title: titleInput.current?.value, body: bodyInput.current?.value});
        } else {
            onCancel();
        }
    }

    function onKey(event) {
        if (event.key === 'Enter') {
            event.target.blur();
        }

        if (event.key === 'Escape') {
            event.target.blur();
        }
    }

    return (
        <div className={styles.ideaTile}>
            <div className={styles.row}>
                <input
                    ref={titleInput}
                    className={classNames(styles.input, styles.ellipsis)}
                    placeholder="Idea title"
                    defaultValue={defaultTitle}
                    onBlur={onBlur}
                    onKeyUp={onKey}
                    autoFocus={autoFocusTitle}
                />
                <div>{Boolean(onDelete) && <DeleteIcon className={styles.deleteTile} onClick={onDelete} />}</div>
            </div>
            <div className={styles.row}>
                <input
                    ref={bodyInput}
                    className={classNames(styles.input, styles.ellipsis)}
                    placeholder="Idea description"
                    defaultValue={defaultBody}
                    onBlur={onBlur}
                    onKeyUp={onKey}
                />
            </div>
        </div>
    );
}

IdeaTile.defaultProps = {
    autoFocusTitle: false,
    onCancel: () => {},
    onChange: () => {},
};
