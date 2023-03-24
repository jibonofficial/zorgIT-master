import {
  AiFillBehanceSquare,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

interface IconGroupClassType {
  classNames?: string;
}

export default function IconGroup({ classNames }: IconGroupClassType) {
  const classes = `icon-style ${classNames}`;
  return (
    <>
      <AiFillBehanceSquare className={classes} />
      <AiFillLinkedin className={classes} />
      <AiFillFacebook className={classes} />
      <AiFillInstagram className={classes} />
    </>
  );
}
