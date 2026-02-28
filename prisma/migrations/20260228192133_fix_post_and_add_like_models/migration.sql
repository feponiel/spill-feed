-- CreateTable
CREATE TABLE "posts_likes" (
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("user_id", "post_id")
);

-- CreateTable
CREATE TABLE "comments_likes" (
    "user_id" TEXT NOT NULL,
    "comment_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("user_id", "comment_id")
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "likes_amount" INTEGER DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_comments" ("author_id", "content", "created_at", "id", "likes_amount", "post_id", "updated_at") SELECT "author_id", "content", "created_at", "id", "likes_amount", "post_id", "updated_at" FROM "comments";
DROP TABLE "comments";
ALTER TABLE "new_comments" RENAME TO "comments";
CREATE INDEX "comments_author_id_idx" ON "comments"("author_id");
CREATE INDEX "comments_post_id_idx" ON "comments"("post_id");
CREATE TABLE "new_posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "author_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "likes_amount" INTEGER DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_posts" ("author_id", "content", "created_at", "id", "likes_amount", "updated_at") SELECT "author_id", "content", "created_at", "id", "likes_amount", "updated_at" FROM "posts";
DROP TABLE "posts";
ALTER TABLE "new_posts" RENAME TO "posts";
CREATE INDEX "posts_author_id_idx" ON "posts"("author_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
