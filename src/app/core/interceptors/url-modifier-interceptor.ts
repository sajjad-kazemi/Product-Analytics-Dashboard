import { HttpInterceptorFn } from "@angular/common/http";

export const urlModifierInterceptor: HttpInterceptorFn = (req, next) => {
  let url = req.url;
  let defaultApiUrl = "https://dummyjson.com";
  if (!url.startsWith("http://") || !url.startsWith("https://")) {
    if (url[0] != "/") {
      defaultApiUrl += "/";
    }
    url = defaultApiUrl + url;
  }
  const newReq = req.clone({url})
  return next(newReq);
};
