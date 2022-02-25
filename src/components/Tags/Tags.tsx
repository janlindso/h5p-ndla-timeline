import * as React from "react";
import { FC, useMemo } from "react";
import { Tag as TagType } from "../../types/Tag";
import { Tag } from "../Tag/Tag";
import styles from "./Tags.module.scss";

type TagsProps = {
  tags: Array<TagType>;
};

export const Tags: FC<TagsProps> = ({ tags }) => {
  const children = useMemo(() => tags.map(tag => <Tag tag={tag} />), [tags]);

  // role="list" is added because the element's `display` property
  // changes the role.
  // eslint-disable-next-line jsx-a11y/no-redundant-roles
  return <ul role="list" className={styles.tags}>{children}</ul>;
};
