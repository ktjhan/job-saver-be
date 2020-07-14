const db = require("../database/db-config");

function findTags() {
  return db("tags").select();
}

function findTagsByUser(userId) {
  return db("tags")
    .select()
    .where({ userId });
}

async function findTagById(id) {
  const tag = await db("tags")
    .select()
    .where({ id })
    .first();

  return tag ? tag : null;
}

async function addTag(newTag, id) {
const {tagName} = newTag
  return db("tags")
    .insert({tagName,jobPosts_id:id});
}

function removeTag(id) {
  return db("tags")
    .where({ id })
    .del();
}

async function updateTag(id, tag_update) {
  await db("tags")
    .where({ id })
    .update(tag_update)
  return findTagById(id);
}

module.exports = {
  findTags,
  findTagsByUser,
  findTagById,
  addTag,
  removeTag,
  updateTag
};