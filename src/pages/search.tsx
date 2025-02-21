import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { RegistrationForm } from "@/components/registration-form"
import { ResultSearchScore } from "@/components/result-search-score"
import { useState } from "react"
import { StudentScore } from "@/types/studentScoreInterface";

function Search() {
  const [searchResult, setSearchResult] = useState<StudentScore | null>(null);
  const [hideCaption, setHideCaption] = useState<boolean>(true);

  return (
    <>
      <div className='m-5 space-y-5'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Search</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <RegistrationForm setSearchResult={setSearchResult} setHideCaption={setHideCaption} />

        <ResultSearchScore searchResult={searchResult} hideCaption={hideCaption} />

      </div>
    </>
  )
}

export default Search
