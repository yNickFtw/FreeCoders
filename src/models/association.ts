// models
import { User } from "./User";
import { Project } from "./Project";
import { Post } from "./Post";
import { LikeProject } from "./LikeProject";
import { LikePost } from "./LikePost";
import { CommentPost } from "./CommentPost";
import { CommentProject } from "./CommentProject";
import { LikeCommentPost } from "./LikeCommentPost";
import { LikeCommentProject } from "./LikeCommentProject";

class AssociationConfig {
  public init(cb: Function) {
    /* Relacionamentos de Posts e Projects com o User */
    User.hasMany(Project);
    Project.belongsTo(User);

    User.hasMany(Post);
    Post.belongsTo(User);

    /* --------------------END-------------------- */

    /* Relacionamentos de Likes de Posts e Projects com User e os dois (Post, Project) */

    User.hasMany(LikeProject);
    LikeProject.belongsTo(User);

    Project.hasMany(LikeProject);
    LikeProject.belongsTo(Project);

    User.hasMany(LikePost);
    LikePost.belongsTo(User);

    Post.hasMany(LikePost);
    LikePost.belongsTo(Post);

    /* --------------------END-------------------- */

    /* Relacionamentos de Comments de Posts e Projects com User e os dois (Post, Project) */

    User.hasMany(CommentProject);
    CommentProject.belongsTo(User);

    Project.hasMany(CommentProject);
    CommentProject.belongsTo(Project);

    User.hasMany(CommentPost);
    CommentPost.belongsTo(User);

    Post.hasMany(CommentPost);
    CommentPost.belongsTo(Post);

    /* --------------------END-------------------- */

    /* Relacionamentos de LikeComments(Post, Project) com User */

    User.hasMany(LikeCommentPost);
    LikeCommentPost.belongsTo(User);

    CommentPost.hasMany(LikeCommentPost);
    LikeCommentPost.belongsTo(CommentPost);

    User.hasMany(LikeCommentProject);
    LikeCommentPost.belongsTo(User);

    CommentProject.hasMany(LikeCommentProject);
    LikeCommentProject.belongsTo(CommentProject);

    /* --------------------END-------------------- */

    cb()
  }
}

export default new AssociationConfig();
