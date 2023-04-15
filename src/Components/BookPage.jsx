import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Button, Form, Card } from "react-bootstrap";
import axios from "axios";
import { Book } from "./Book";

const BookPage = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isend, setIsend] = useState(false);
  const [query, setQuery] = useState("리엑트");
  const [onsummit, setOnsummit] = useState(false);

  const getData = async () => {
    const url = "https://dapi.kakao.com/v3/search/book?target=title";
    const config = {
      headers: { Authorization: "KakaoAK 62d1651fe45fa7781380543145cdd1c6" },
      params: { query: query, size: 6, page: page },
    };
    setLoading(true);
    const result = await axios.get(url, config);
    console.log(result);
    setList(result.data.documents);
    setIsend(result.data.meta.is_end);
    setLoading(false);
  };

  const onSummit = (e) => {
    e.preventDefault();
    setPage(1);
    getData();
  };

  useEffect(() => {
    getData();
  }, [page]);

  if (loading) return <h1 className="text-center">로딩중임</h1>;
  return (
    <Row>
      <h1 className="text-center my-5">도서검색</h1>
      <Row>
        <Col md={5}>
          <Form onSubmit={onSummit}>
            <Form.Control
              onChange={(e) => setQuery(e.target.value)}
              placeholder="검색어"
            />
            <Button className="btn-sm">검색</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {list.map((book) => (
          <Col className="my-2" key={book.isbn} md={3} xs={6}>
            <Card>
              <Card.Body>
                <img src={book.thumbnail} />
                <div className="ellipsis">{book.title}</div>
                <div>{book.price}원</div>
                <Book book={book} />
              </Card.Body>
            </Card>
          </Col>
        ))}
        <div className="text-center my-3">
          <Button
            disabled={isend && false}
            onClick={() => setPage(page - 1)}
            className="btnsm"
          >
            이전
          </Button>
          <span className="px-3">{page}</span>
          <Button
            disabled={isend && true}
            onClick={() => setPage(page + 1)}
            className="btnsm"
          >
            다음
          </Button>
        </div>
      </Row>
    </Row>
  );
};

export default BookPage;
