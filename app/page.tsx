import PageHeader from "@/components/PageHeader";
import { formatDate, news } from "@/lib/news";
import { SITE_NAME } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="home-eyecatch">
        <h1>
          <span>{SITE_NAME}</span>
        </h1>
        <ul>
          <li>
            <span>暗号通貨関連事業の開発・運営</span>
          </li>
          <li>
            <span>技術コンサルティング・研究開発</span>
          </li>
          <li>
            <span>その他システム受託開発</span>
          </li>
        </ul>
      </section>

      <PageHeader level={2}>お知らせ</PageHeader>

      <table className="table news-table">
        <caption className="text-center">最近の活動</caption>
        <tbody>
          {news.map((item) => (
            <tr key={`${item.date}-${formatDate(item.date)}`}>
              <th>
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </th>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
