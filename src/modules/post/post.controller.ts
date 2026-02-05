import { Request, Response } from "express";
import { postService } from "./post.service";
import { log } from "node:console";

const createPost = async (req: Request, res: Response) => {
  try {
      const { title, content, tags } = req.body;
      
      if (!title) {
        return res.status(400).json({
          success: false,
          message: "Title Required For posting",
        });
      }
      if (!content) {
        return res.status(400).json({
          success: false,
          message: "Your must Write a Content To post a Blog",
        });
      }
      if (!tags) {
        return res.status(400).json({
          success: false,
          message: "Minimum one Tag Required",
        });
      }

      const result = await postService.createPost(req.body)

  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


export const PostController = {
    createPost
}
