"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  type InsightCardData,
  topicTone,
  uniqueTopics,
} from "./insights-utils";

function FeaturedNote({
  post,
  kicker,
}: {
  post: InsightCardData;
  kicker: string;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="insights-featured"
      aria-labelledby={`featured-${post.slug}`}
    >
      <div className="insights-featured__body">
        <p className="insights-featured__kicker">
          <span>{kicker}</span>
          <span aria-hidden="true">·</span>
          <span>{post.category}</span>
        </p>
        <h2 id={`featured-${post.slug}`}>{post.title}</h2>
        {post.excerpt ? <p className="insights-featured__copy">{post.excerpt}</p> : null}
        <div className="insights-featured__foot">
          <p className="insights-featured__meta">
            {post.author}
            <span aria-hidden="true"> · </span>
            <time dateTime={post.date}>{post.dateLabel}</time>
          </p>
          <span className="button primary">
            Read the note
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
      <div className="insights-featured__media">
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 560px"
            className="object-cover"
            priority
          />
        ) : (
          <div className="insights-featured__placeholder">
            <span>WonderIT</span>
          </div>
        )}
      </div>
    </Link>
  );
}

function NoteCard({ post, index }: { post: InsightCardData; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Link href={`/blog/${post.slug}`} className="insights-card">
      <div className="insights-card__media">
        <span className="insights-card__index" aria-hidden="true">
          {number}
        </span>
        {post.image ? (
          <Image
            src={post.image}
            alt=""
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="insights-card__placeholder">
            <span>WonderIT</span>
          </div>
        )}
      </div>
      <div className="insights-card__body">
        <span className="insights-card__cat">{post.category}</span>
        <h3>{post.title}</h3>
        {post.excerpt ? <p>{post.excerpt}</p> : null}
        <span className="insights-card__cta">
          <time dateTime={post.date}>{post.dateLabel}</time>
          <i aria-hidden="true">Read →</i>
        </span>
      </div>
    </Link>
  );
}

export default function InsightsFeed({ posts }: { posts: InsightCardData[] }) {
  const [filter, setFilter] = useState("all");
  const topics = useMemo(() => uniqueTopics(posts), [posts]);

  const visible =
    filter === "all"
      ? posts
      : posts.filter((post) => post.categorySlug === filter);

  const featured = visible[0];
  const rest = visible.slice(1);

  if (!posts.length) {
    return (
      <section className="insights-feed">
        <article className="insights-empty">
          <h2>Notes are on the way.</h2>
          <p>
            We&apos;re preparing the next batch of writing on software, AI, and
            product work. Check back shortly.
          </p>
        </article>
      </section>
    );
  }

  return (
    <section className="insights-feed" aria-labelledby="insights-feed-title">
      <div className="insights-feed__head">
        <div>
          <p className="section-label">The notebook</p>
          <h2 id="insights-feed-title">A wider look at what we&apos;re thinking.</h2>
        </div>
        <p className="insights-feed__lede">
          <strong>Filter by topic.</strong> Every note comes from work we have
          actually shipped — architecture, AI, mobile, and the product
          decisions around them.
        </p>
      </div>

      <div className="insights-toolbar">
        <div className="insights-filters" role="tablist" aria-label="Filter notes">
          <button
            type="button"
            role="tab"
            aria-selected={filter === "all"}
            className={`insights-filter${filter === "all" ? " is-active" : ""}`}
            data-tone="violet"
            onClick={() => setFilter("all")}
          >
            All notes
            <em>{posts.length}</em>
          </button>
          {topics.map((topic) => (
            <button
              key={topic.slug}
              type="button"
              role="tab"
              aria-selected={filter === topic.slug}
              className={`insights-filter${filter === topic.slug ? " is-active" : ""}`}
              data-tone={topicTone(topic.slug, topics)}
              onClick={() => setFilter(topic.slug)}
            >
              {topic.name}
              <em>{topic.count}</em>
            </button>
          ))}
        </div>
        <p className="insights-count">
          Showing <b>{visible.length}</b> of {posts.length}
        </p>
      </div>

      {featured ? (
        <FeaturedNote
          post={featured}
          kicker={filter === "all" ? "Latest" : "Note"}
        />
      ) : null}

      {rest.length ? (
        <div className="insights-grid">
          {rest.map((post, index) => (
            <NoteCard key={post.id} post={post} index={index} />
          ))}
        </div>
      ) : null}

      {!visible.length ? (
        <p className="lede">No notes in this topic yet.</p>
      ) : null}
    </section>
  );
}
