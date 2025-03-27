# UMD_ILL_Website
# LoanToChapter.js

## About

**LoanToChapter.js** is a front-end JavaScript utility for dynamically switching between Interlibrary Loan (ILL) request types within the same HTML form interface. It enhances the user experience by allowing seamless switching between **Loan**, **Book Chapter**, and **eBook** request formats—all within a single form.

### Key Features

- **Dynamic form type toggling**: Users can switch between loan, chapter, and ebook request forms without losing entered data or reloading the page.
- **Field value preservation**: Transfers field values such as title, author, and publication year when switching formats.
- **Context-sensitive display**: Dynamically shows or hides form field groups (`loan`, `chapter`, `ebook`) based on the active type.
- **Interactive buttons**: Toggle button labels update based on current form mode.
- **Accessibility-first design**: Uses `focus()` and logical UI structuring to ensure usability with screen readers.
- **Compatible with ILLiad**: All form field values conform to ILLiad’s expected backend types (`Loan`, `Article`).

---

## Requirements

- Include the script in your HTML `<head>`:
```html
<script type="text/javascript" src="js/LoanToChapter.js"></script>
```
- An HTML form with RequestTypes identified by class names (loan, chapter, ebook).
- The form fields must include standard ILLiad field names like LoanTitle, LoanAuthor, PhotoJournalTitle, etc., and be grouped with CSS classes like loan, chapter, or ebook.
- Utilize ILLiad's standard field IDs to maintain compatibility with the system's processing requirements. Key field IDs include:

 - `LoanTitle`: Title of the item for loan requests.
 - `LoanAuthor`: Author of the item for loan requests.
 - `PhotoJournalTitle`: Title of the journal for article or chapter requests.
 - `PhotoArticleAuthor`: Author of the article or chapter.
 - `PhotoJournalYear`: Publication year of the journal.
 
## Functions 
### SwitchLoanToChapter()
-Changes form type to `GenericRequestArticle` with "Article" request type.

- Sets document type to `Book Chapter`.

- Transfers `LoanTitle`, `LoanAuthor`, and `LoanDate` to their chapter equivalents.

- Displays `chapter` fields, hides `loan` and `ebook`.

### SwitchChapterToLoan()
- Resets form type to `GenericRequestLoan` with `Loan` type.
- Sets document type to `Book`.

- Transfers `PhotoJournalTitle`, `PhotoArticleAuthor`, and `PhotoJournalYear` to loan fields.

- Displays **loan** hides **chapter** and **ebook**.

### SwitchLoanToEBook()
- Sets form type to `GenericRequestArticle`, type to `Article`, and document type to `EBook`.
- Transfers loan field values to EBook.
- Prefills `PhotoArticleTitle` with **[Patron requesting EBook]**.
- Displays **ebook**, hides **loan** and **chapter**.

### SwitchEBookToLoan()
- Resets the form to a book loan request
- Sets type to `Loan` and document type to `Book`.
- Transfers **EBook** field values to **Loan** fields.
- Displays **Loan**, hides **Chapter** and **EBook**.

### SwitchChapterToEBook()
- Converts chapter fields to eBook fields.
- Displays `ebook`, hides `chapter` and `loan`.

### SwitchEBookToChapter()
- Converts Ebook fields to chapter fields.
- Displays `chapter`, hides `loan` and `ebook`.

## Example UI Flow
### Patron Path:
1. Patron clicks **Request Item through Interlibrary Loan** from **WorldCat Discovery** or **Primo website**
2. They land on the **Loan Request form**.
3. They realize they want a chapter, so they click **Switch to Chapter Request.**
4. Without losing entered data, the form becomes a Chapter Request.
5. Later, they switch to eBook and all relevant fields auto-update and changes article title to "[Patron requesting EBook]"

## Tests
This script has been tested manually through UMD’s ILLiad Website interface. To test it locally, ensure that your HTML elements match the expected id/class attributes and simulate switching using the toggle buttons.
Manual validation of this feature involves:

1. Entering title, author, and year into the loan form
2. Clicking "Switch to Chapter Request" and verifying data appears in chapter fields.
3. Clicking "Switch to Loan Request" and confirming values are restored.


