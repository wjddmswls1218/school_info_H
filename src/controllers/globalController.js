import Student from "../models/Student";

export const mainController = (req, res) => {
  res.render("global/main");
};

export const resultController = async (req, res) => {
  const { s, g, c } = req.query;

  if (s === "--선택--" || g === "--선택--" || c === "--선택--") {
    res.render("global/main", { errorMsg: "학교, 학년, 반을 선택해주세요" });
  } else {
    try {
      const studentList = await Student.find(
        {
          school: s,
          grade: parseInt(g),
          ban: parseInt(c),
        },
        {}
      );

      res.render("global/result", { list: studentList });
    } catch (e) {
      console.log(e);
      mainController(req, res);
    }
  }
};
