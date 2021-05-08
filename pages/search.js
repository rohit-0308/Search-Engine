import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, Context_Key } from "../keys";
import Response from "../Response"
import {useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer"

function Search({ results }) {
  console.log(results);
    const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${Context_Key}&q=${context.query.term}&start=${startIndex}`
  ).then((response) => response.json());

  // After the Server has Rendered.... Pass the reuslts to the client
  return {
    props: {
      results: data,
    },
  };
}
