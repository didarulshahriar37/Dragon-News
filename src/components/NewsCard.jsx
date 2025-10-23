// NewsCard.jsx
import React, { useMemo, useState } from "react";
import {
    FiBookmark,
    FiShare2,
    FiTag,
} from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { HiOutlineFire } from "react-icons/hi";
import { MdToday } from "react-icons/md";

/**
 * @param {{ news: {
 *   id:string, category_id:number, title:string,
 *   rating:{number:number,badge?:string}, total_view:number,
 *   author:{name:string,published_date:string,img?:string},
 *   thumbnail_url?:string, image_url?:string, details:string,
 *   tags?:string[], others?:{is_today_pick?:boolean,is_trending?:boolean},
 *   production?:boolean
 * }}} props
 */
const NewsCard = ({ news }) => {
    const {
        title,
        rating = { number: 0, badge: "" },
        total_view = 0,
        author = {},
        thumbnail_url,
        image_url,
        details = "",
        tags = [],
        others = {},
    } = news || {};

    const [expanded, setExpanded] = useState(false);

    const coverSrc = thumbnail_url || image_url;
    const dateText = useMemo(() => {
        try {
            return new Date(author?.published_date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "2-digit",
            });
        } catch {
            return author?.published_date || "";
        }
    }, [author?.published_date]);

    const shortText =
        details.length > 260 ? details.slice(0, 260).trim() + "..." : details;

    const formatViews = (n) =>
        n >= 1_000_000 ? (n / 1_000_000).toFixed(1) + "M"
            : n >= 1_000 ? (n / 1_000).toFixed(1) + "k"
                : String(n);

    return (
        <article className="card bg-base-100 shadow-xl border border-base-200 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
                            <img
                                alt={author?.name || "Author"}
                                src={author?.img || "https://i.pravatar.cc/96"}
                            />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold leading-tight">{author?.name || "Unknown Author"}</h4>
                        <p className="text-sm text-base-content/60">{dateText}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {others?.is_trending && (
                        <span className="badge badge-error gap-1 text-white">
                            <HiOutlineFire className="text-lg" />
                            Trending
                        </span>
                    )}
                    {others?.is_today_pick && (
                        <span className="badge badge-info gap-1 text-white">
                            <MdToday className="text-lg" />
                            Today’s Pick
                        </span>
                    )}
                    <button className="btn btn-ghost btn-sm" aria-label="Bookmark">
                        <FiBookmark className="text-lg" />
                    </button>
                    <button className="btn btn-ghost btn-sm" aria-label="Share">
                        <FiShare2 className="text-lg" />
                    </button>
                </div>
            </div>

            {/* Title */}
            <div className="px-5 pt-3">
                <h2 className="card-title leading-snug">{title}</h2>
            </div>

            {/* Image */}
            {coverSrc && (
                <figure className="px-5 pt-4">
                    <img
                        src={coverSrc}
                        alt={title}
                        className="w-full rounded-xl object-cover max-h-[280px]"
                    />
                </figure>
            )}

            {/* Details */}
            <div className="card-body pt-4">
                <p className="text-base-content/80">
                    {expanded ? details : shortText}
                </p>
                {details.length > 260 && (
                    <button
                        onClick={() => setExpanded((v) => !v)}
                        className="link link-primary w-fit"
                    >
                        {expanded ? "Read less" : "Read more"}
                    </button>
                )}

                {/* Tags */}
                {tags?.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-2">
                        {tags.map((t, i) => (
                            <span key={i} className="badge badge-outline gap-1">
                                <FiTag className="text-sm" />
                                {t}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="px-5 pb-5">
                <div className="flex items-center justify-between border-t border-base-200 pt-4">
                    {/* Rating (daisyUI rating) */}
                    <div className="flex items-center gap-2">
                        <div className="rating rating-sm">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <input
                                    key={s}
                                    type="radio"
                                    readOnly
                                    className={`mask mask-star-2 ${s <= (rating?.number ?? 0) ? "bg-orange-400" : "bg-base-300"}`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-base-content/70">
                            {Number(rating?.number ?? 0).toFixed(1)}
                            {rating?.badge ? ` • ${rating.badge}` : ""}
                        </span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-1 text-base-content/70">
                        <AiFillEye className="text-lg" />
                        <span className="text-sm">{formatViews(total_view)} views</span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;
