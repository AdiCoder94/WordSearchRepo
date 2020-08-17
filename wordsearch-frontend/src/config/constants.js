module.exports = {
  backendURL: "http://localhost:4000",
  frontendURL: "http://localhost:3012",
  memberDashboardURL: "/memberdashboard",
  viewWordsByLetterURL: '/memberdashboard/viewwordsbyletter',
  signupURL: '/api/account/signup',
  signinURL:'/api/account/signin',
  signoutURL: '/api/account/signout',
  viewworddatabaseURL: '/api/word/allwords',
  viewwordbyletterURL: '/api/word/viewwordsbyletter',
  enternewwordURL: '/api/word/new',
  newWordFormInputs: [
    'NewWord',
    'OriginLang',
    'RootWord',
    'Category', 
    'SubCategory',
    'Connotation' ],
  alphabetsArray: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ] ,
}