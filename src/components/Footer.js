function Footer() {
  const getCurrYear = new Date().getFullYear();

  return (
    <footer>
      <p>© All Rights Reserved.{getCurrYear}</p>
    </footer>
  );
}

export default Footer;
