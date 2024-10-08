export interface YMapProvider {
   version?: string;
   enterprise?: boolean;
   /**
    *  Yandex.Maps API avaliable query params
    *  https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/load-docpage/
    *  Some query params will be omitted in any case because they are used
    *  by the library: onload, onerror
    */
   query?: {
      lang?: "tr_TR" | "en_US" | "en_RU" | "ru_RU" | "ru_UA" | "uk_UA";
      apikey?: string;
      suggest_apikey?: string;
      coordorder?: "latlong" | "longlat";
      load?: string;
      mode?: "release" | "debug";
      csp?: boolean;
      ns?: string;
   };
   /**
    *  Allows provider to preload Yandex.Maps API even if
    *  there are no map components on the page
    */
   preload?: boolean;
}
