CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  industry TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a contact request
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(first_name) between 1 and 100
  AND length(last_name) between 1 and 100
  AND length(email) between 3 and 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(company) between 1 and 200
  AND length(message) between 1 and 5000
  AND (phone IS NULL OR length(phone) <= 50)
  AND (industry IS NULL OR length(industry) <= 100)
);