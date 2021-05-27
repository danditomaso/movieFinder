import style from "@/styles/Header.module.scss";
import siteSettings from "@/config/siteSettings";

/**
 * Renders a <Layout /> component
 * @param  props.children - this component can wrap other components and render them wihtin the main html element.
 * @returns <Layout> <div>...</div> </Layout>
 *
 **
 **/

export default function Header(props) {
  return (
    <header className={style.header}>
      <div className="wrapper flexCenter">
        <h1>{siteSettings?.meta?.siteName}</h1>

        <label htmlFor="searchBar">enter movie to search for</label>
        <span id="searchBar-hint" className="input-hint">
          E.g. Harry Potter
        </span>
        <input id="searchBar" aria-describedby="searchBar-hint" name="search" type="text" />

        {/* <input type="text" className={style.searchBar} placeholder="E.g. Harry Potter"></input> */}
      </div>
    </header>
  );
}
