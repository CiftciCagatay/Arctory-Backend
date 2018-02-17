| Request type  | Path                           | Explanation  | Query Params | Request Body | URL Params |
| ------------- |-------------------------------| -----| ---| -- | ---- |
| GET           | /lessons                      | Query Paramlara göre derslerin adını, konumunu, öğretmenin adını döndürür | maxFee, minFee, searchText, maxDistance, clientLocation, meetingPoint, language, gender |
| GET           | /users/:userId                | Kullanıcıya ait tüm detayları döndürür | | | userId |
| GET           | /users/:userId/lessonsTaken   | Öğrencinin ders aldığı öğretmenleri ve o öğretmenlerden aldığı dersleri döndürür || | userId |
| GET           | /users/:userId/lessonsGiven   | | | | userId |
| GET           | /users/:userId/students       | Öğretmenden ders alan öğrencilerin listesini döndürür |
| GET           | /applications                 | Alınan ve yapılan başvuruları döndürür | userId |
| POST          | /applications                 | Başvuru gönder | | teacherId, lessonId, studentId, message, date |
| DELETE        | /applications/:applicationId  | Başvuru sil || | applicationId |
| GET           | /chat                         ||
| GET           | /chat/:chatId/messages        || messageId |
| POST          | /chat/:chatId/messages        || | message, date, authorId | chatId |
